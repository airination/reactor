import React from "react"

class ImgContent extends React.Component {
   	render() {
      return (
         <div style={{textAlign: 'center'}}>
            <img src="https://www.webhtml5.info/assets/images/theboys.jpg" alt="The boys" title="The boys" height="340" /><br />
            <img src="https://my-react-app-ptgu11dwz.now.sh/static/media/logo.5d5d9eef.svg" className={'App-logo'} alt="React Logo" title="React Logo" />
         </div>
      );
   	}
}

export default ImgContent;