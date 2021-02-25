import { useState } from 'react';
import { DEFAULT_ERROR, STATE_UPDATE_STATE, STATE_VIEW_NEW_QUOTE, STATE_VIEW_DISPLAY_QUOTE, STATE_VIEW_ERROR, STATE_VIEW_LOADING } from '../utils/Constants';
import { useOFXQuoteContext } from '../state/useOFXQuoteContext';
import getOFXQuote from '../service/GetOFXQuote';
import defaultVales from '../config/DefaultValues';

const useOFXQuoteForm = () => {
  const { state, dispatch } = useOFXQuoteContext();
  const { inputs } = state || {};
  const [values, setValues] = useState(inputs);
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    if(inputs.fromCurrency === inputs.toCurrency){
        dispatch({
                type: STATE_UPDATE_STATE,
                payload: { view: STATE_VIEW_ERROR, error: { message: "From and To Currency must be different." } },
              });
        return;
    }
    dispatch({
      type: STATE_UPDATE_STATE,
      payload: { view: STATE_VIEW_LOADING },
    });
    getOFXQuote(inputs).then((data) => {
      dispatch({
        type: STATE_UPDATE_STATE,
        payload: { view: STATE_VIEW_DISPLAY_QUOTE, result: data },
      });
    }).catch((err) => {
      dispatch({
        type: STATE_UPDATE_STATE,
        payload: { view: STATE_VIEW_ERROR, error: { message: err?.response?.data?.Message || DEFAULT_ERROR } },
      });
    });
  }
  const handleRestart = () => {
    dispatch({
      type: STATE_UPDATE_STATE,
      payload: { view: STATE_VIEW_NEW_QUOTE, inputs: { ...defaultVales } },
    });
  }
  const handleInputChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    dispatch({
      type: STATE_UPDATE_STATE,
      payload: { inputs: { ...values, [event.target.name]: event.target.value } },
    });
  };

  return {
    handleSubmit,
    handleInputChange,
    handleRestart,
    values,
  };
}
export default useOFXQuoteForm;