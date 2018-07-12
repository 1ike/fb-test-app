import React from "react";

// import _connect from '../../connect';
import Form from "./Form";
import List from "./List";

export default class Points extends React.Component {
  render() {
    return (
      <div id="points">
        <Form />
        <List />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   const props = {
//     channels: state.channels,
//     currentChannelId: state.currentChannelId,
//   };
//   return props;
// };

// @_connect(mapStateToProps)
// export default class Channels extends React.Component {
//   chooseChannel = id => (e) => {
//     e.preventDefault();
//     if (this.props.currentChannelId === id) return;
//     this.props.setCurrentChannel(id);
//   }

//   openModalCreate = (e) => {
//     e.preventDefault();
//     this.props.openModalCreateChannel();
//   }
//   openModalEdit = channel => (e) => {
//     e.preventDefault();
//     this.props.openModalEditChannel(channel);
//   }
//   openModalDelete = channel => (e) => {
//     e.preventDefault();
//     this.props.openModalDeleteChannel(channel);
//   }

//   render() {
//     return (
//       <div id='channels' className='mt-5 mb-5'>
//         <Form />
//         <List />
//       </div>
//     );
//   }
// }
