import { Dialogs } from "./Dialogs";
import { Dispatch, compose } from "redux";
import { AppRootStateType } from "../../redux/redux-store";
import { DialogPageType } from "../../redux/store";
import { connect } from "react-redux";
import { addMessageActionCreator } from "../../redux/dialogs_reducer";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
  dialogsPage: DialogPageType;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  sendMessage: (newMessageBody: string) => void;
};

export type DialogsPagePropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(addMessageActionCreator(newMessageBody));
    },
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
