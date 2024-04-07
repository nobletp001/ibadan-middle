import { RootState } from '@/redux/store';
import { hideToast } from '@/redux/toastSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

function ToastContainer() {
  const { message, type } = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch()
  useEffect(() => {
    if (message) {
      toast[type](message);
      dispatch(hideToast());
    }
  }, [message, type, dispatch]);

  return (
   <>
   </>
  )
}

export default ToastContainer