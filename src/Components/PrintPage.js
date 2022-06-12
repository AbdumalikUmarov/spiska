import * as React from "react";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "./componentToPrint";

const PrintPage = ({
  cartDatas,
  handleSuccess,
  TotalPrice,
  totalQty,
  phoneNumber,
  buyerName,
  address,
}) => {
  const componentRef = React.useRef(null);

  const onBeforeGetContentResolve = React.useRef(null);

  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("old boring text");
  let date = new Date();

  const formattedDate =
    date.getDate() +
    "." +
    (date.getMonth() > 10 ? date.getMonth() : "0" + date.getMonth()) +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();
  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called");
    handleSuccess();
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called");
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    console.log("`onBeforeGetContent` called");
    setLoading(true);
    setText("Loading new text...");
    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        setText("New, Updated Text!");
        resolve();
      }, 2000);
    });
  }, [setLoading, setText]);

  React.useEffect(() => {
    if (
      text === "New, Updated Text!" &&
      typeof onBeforeGetContentResolve.current === "function"
    ) {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve.current, text]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = React.useCallback(() => {
    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
    // to the root node of the returned component as it will be overwritten.

    // Bad: the `onClick` here will be overwritten by `react-to-print`
    // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

    // Good
    return <button>Print </button>;
  }, []);

  return (
    <div>
      <ReactToPrint
        content={reactToPrintContent}
        documentTitle="AwesomeFileName"
        onAfterPrint={handleAfterPrint}
        onBeforeGetContent={handleOnBeforeGetContent}
        onBeforePrint={handleBeforePrint}
        removeAfterPrint
        trigger={reactToPrintTrigger}
      />
      <ComponentToPrint
        ref={componentRef}
        text={text}
        cartDatas={cartDatas}
        TotalPrice={TotalPrice}
        totalQty={totalQty}
        phoneNumber={phoneNumber}
        buyerName={buyerName}
        address={address}
        formattedDate={formattedDate}
      />
    </div>
  );
};
export default PrintPage;
