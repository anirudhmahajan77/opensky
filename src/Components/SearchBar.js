import React, { useEffect, useState } from 'react'
import { FiMic, FiSearch, FiX, FiMicOff } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import styles from "../Style/SearchBar.module.css";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert severity="error" elevation={6} ref={ref} variant="filled" {...props} sx={{ width: '100%', color: "white", }} />;
});

const SearchBar = (props) => {
    let [city, setCity] = useState("");
    let [modal, setModal] = useState(false);
    let [speech, setSpeech] = useState(true);
    let [helper, setHelper] = useState(false);

    const handleClose = async () => {
        await setModal(false);
        stopHandle();
        resetTranscript();
    };
    const handleOpen = () => { setModal(true) };
    const navigate = useNavigate();
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '32%',
        bgcolor: 'white',
        boxShadow: 24,
        borderRadius: 1,
        p: 4,
    };

    useEffect(() => {
        if (props.city !== undefined) {
            setCity(props.city);
        }
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            setSpeech(false)
        }
    }, [props.city])

    const updateLocation = (e) => {
        setCity(e.target.value)
    }

    const searchCity = () => {
        if (city.length !== 0) {
            setHelper(false)
            navigate('/weather/' + city);
            window.location.reload();
            let cities = JSON.parse(window.localStorage.getItem('cities'));
            if (cities === null) {
                let ct = [];
                ct.push(city);
                window.localStorage.setItem('cities', JSON.stringify(ct));
                console.log(ct)
            } else {
                if (!cities.includes(city)) {
                    if (cities.length === 3) {
                        cities.pop();
                    }
                    cities.unshift(city);
                    window.localStorage.setItem('cities', JSON.stringify(cities));
                    console.log(cities)
                }
            }
        } else {
            setHelper(true)
        }
    }

    const searchMic = () => {
        stopHandle();
        resetTranscript();
        handleClose();
        navigate('/weather/' + transcript.replace('.', ''));
        window.location.reload();
    }

    const handleListing = () => {
        setIsListening(true);
        SpeechRecognition.startListening({
            continuous: true,
        });
    };
    const stopHandle = () => {
        setIsListening(false);
        SpeechRecognition.stopListening();
    };
    const handleReset = () => {
        stopHandle();
        resetTranscript('');
    };

    return (
        <div className={styles.container}>
            {helper ?
                <Snackbar className={styles.helper} open={helper} autoHideDuration={5000} onClose={() => { setHelper(false) }}>
                    <Alert onClose={() => { setHelper(false) }} >
                        Please Enter City Name!
                    </Alert>
                </Snackbar>
                : null}
            <div className={styles.s}>
                <input
                    type="text"
                    value={city}
                    placeholder={`Search Any Location`}
                    onChange={updateLocation}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            searchCity()
                        }
                    }}
                    className={styles.searchInput} />
                {city.length > 0 ?
                    <FiX onClick={() => { setCity('') }} className={styles.clear} />
                    : <p className={styles.clear}></p>}
                {speech ?
                    <div className={styles.mic}>
                        <div className={styles.speech}>
                        <FiMic onClick={handleOpen} />
                        </div>
                        <Modal
                            open={modal}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <div >
                                    {transcript && (
                                        <div className="microphone-result-container">
                                            <div className="microphone-result-text">{transcript}</div>
                                        </div>
                                    )}
                                    <div className={styles.microphoneStatus}>
                                        {isListening ? "Listening........." : "Click to start Listening"}
                                    </div>
                                    <div className={styles.btnHolder}>
                                        {isListening ?
                                            <div onClick={stopHandle} className={styles.micIcon}>
                                                    <FiMicOff />
                                                </div>
                                             :
                                            <div
                                                className={styles.micIcon}
                                                onClick={handleListing}
                                            >
                                                <FiMic />
                                            </div>

                                        }
                                    </div>
                                    <div className={styles.btnHolder}>
                                        <div className={styles.actBtn} onClick={handleReset}>
                                            Reset
                                        </div>
                                        <div className={styles.actBtn} onClick={searchMic}>Search</div></div>
                                </div>
                            </Box>
                        </Modal>
                    </div>
                    : null}
                <div className={styles.search}
                    onClick={searchCity}>
                    <FiSearch />
                </div>
            </div>

        </div >
    )
}

export default SearchBar