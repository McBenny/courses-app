import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

import './styles.scss';

const Authentication = (props: { open: boolean, handleClose: () => void, authenticate: () => void }) => {
    const { open, handleClose, authenticate } = props;
    const [authenticationDone, setAuthenticationDone] = useState(false);

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Please authenticate before adding a course in your cart
            </DialogTitle>
            <DialogContent>
                {authenticationDone
                    ? <p className="authentication__line">You're now authenticated</p>
                    : (
                        <form>
                            <div className="authentication__line">
                                <TextField
                                    label="User name"
                                    id="username"
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div className="authentication__line">
                                <TextField
                                    label="Password"
                                    id="password"
                                    variant="outlined"
                                    size="small"
                                    type="password"
                                />
                            </div>
                        </form>
                    )}
            </DialogContent>
            {authenticationDone
                ? ''
                : (
                    <DialogActions>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                setAuthenticationDone(true);
                                setTimeout(() => {
                                    authenticate();
                                    handleClose();
                                }, 2000);
                            }}
                        >
                            Log in
                        </Button>
                    </DialogActions>
                )}
        </Dialog>
    );
};

Authentication.defaultProps = { open: false };

Authentication.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    authenticate: PropTypes.func
};

export default Authentication;
