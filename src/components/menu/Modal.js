import ReactModal from 'react-modal';

const Modal = () => {
  return (
    <ReactModal
      isOpen={
        false
        /* Boolean describing if the modal should be shown or not. */
      }
      ariaHideApp={
        true
        /* Boolean indicating if the appElement should be hidden */
      }
      shouldFocusAfterRender={
        true
        /* Boolean indicating if the modal should be focused after render. */
      }
      shouldCloseOnOverlayClick={
        true
        /* Boolean indicating if the overlay should close the modal */
      }
      shouldCloseOnEsc={
        true
        /* Boolean indicating if pressing the esc key should close the modal
       Note: By disabling the esc key from closing the modal
       you may introduce an accessibility issue. */
      }
      shouldReturnFocusAfterClose={
        true
        /* Boolean indicating if the modal should restore focus to the element
       that had focus prior to its display. */
      }
      role={
        'dialog'
        /* String indicating the role of the modal, allowing the 'dialog' role
       to be applied if desired.
       This attribute is `dialog` by default. */
      }
      preventScroll={
        false
        /* Boolean indicating if the modal should use the preventScroll flag when
       restoring focus to the element that had focus prior to its display. */
      }
      parentSelector={
        () => document.body
        /* Function that will be called to get the parent element
       that the modal will be attached to. */
      }
      data={
        { background: 'green' }
        /* Additional data attributes (optional). */
      }
      testId={
        ''
        /* String testId that renders a data-testid attribute in the DOM,
      useful for testing. */
      }
    >
      <p>Modal Content</p>
    </ReactModal>
  );
};

export default Modal;
