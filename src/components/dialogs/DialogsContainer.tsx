import { Dialogs } from "./Dialogs";
import { Dispatch, compose } from "redux";
import { AppRootStateType } from "../../redux/redux-store";
import { DialogPageType } from "../../redux/store";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs_reducer";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
  dialogsPage: DialogPageType;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  updateNewMessageBody: (body: string) => void;
  sendMessage: () => void;
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
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageTextActionCreator(body));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);
