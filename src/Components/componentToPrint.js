import * as React from "react";

import image from "../assests/download.png";

export class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { checked: false, buyerName: "" };
  }

  canvasEl;

  componentDidMount() {
    //   console.log(this.props.cartDatas)
    // const ctx = this.canvasEl.getContext("2d");
    // if (ctx) {
    //   ctx.beginPath();
    //   ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    //   ctx.stroke();
    //   ctx.fillStyle = "rgb(200, 0, 0)";
    //   ctx.fillRect(85, 40, 20, 20);
    //   ctx.save();
    // }
  }

  handleCheckboxOnChange = () =>
    this.setState({ checked: !this.state.checked });

  //   setRef = (ref) => (this.canvasEl = ref);

  render() {
    const {
      text,
      cartDatas,
      TotalPrice,
      totalQty,
      phoneNumber,
      buyerName,
      address,
      formattedDate,
    } = this.props;
    // console.log(cartData.docs)
    return (
      <div className="relativeCSS">
        <style type="text/css" media="print">
          {"@page { size: portrait; }\
"}
        </style>
        <div className="flash" style={{ padding: "30px 50px" }} />
        <table className="testClass" style={{ margin: "0 20px" }}>
          <thead>
            <tr>
              <td style={{ textAlign: "center" }} colSpan={8}>
                {buyerName} {address} {phoneNumber}
              </td>
            </tr>
            <tr>
              <td style={{ width: "500px", paddingLeft: "16px" }} colSpan={2}>
                Sumka:
              </td>
              <td style={{ width: "200px", paddingLeft: "16px" }}>Narxi:</td>
              <td style={{ width: "200px", paddingLeft: "16px" }}>N x S</td>
              <td style={{ width: "200px", paddingLeft: "16px" }} colSpan={2}>
                Soni:
              </td>
              <td style={{ width: "300px", paddingLeft: "16px" }}>Belgi:</td>
            </tr>
          </thead>
          <tbody>
            {cartDatas.map((el) => {
              let data = el.data();
              return (
                <tr>
                  <td
                    style={{ textAlign: "center", width: "500px" }}
                    colSpan={2}
                  >
                    {data.title}
                  </td>
                  <td style={{ textAlign: "center" }}>{data.price}</td>
                  <td style={{ textAlign: "center" }}>
                    {data.price * data.qty}
                  </td>
                  <td style={{ textAlign: "center" }} colSpan={2}>
                    {data.qty}
                  </td>

                  <td style={{ textAlign: "center" }}>{data.description}</td>
                </tr>
              );
            })}
            <tr>
              <td>sana: </td>
              <td style={{ textAlign: "center", width: "180px" }}>
                {formattedDate}
              </td>
              <td>Summa: </td>
              <td style={{ textAlign: "center" }}>{TotalPrice}</td>
              <td>Jami:</td>
              <td style={{ textAlign: "center", width: "80px" }}>{totalQty}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export const FunctionalComponentToPrint = React.forwardRef((props, ref) => {
  // eslint-disable-line max-len
  return <ComponentToPrint ref={ref} text={props.text} />;
});
