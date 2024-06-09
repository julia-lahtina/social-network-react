import React, { ChangeEvent } from "react";
import s from "./ProfileInfo.module.css";

export class ProfileStatus extends React.Component<any> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateUserStatus(this.state.status);
  };
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div>
        {this.state.editMode && (
          <div>
            <input
              onBlur={this.deactivateEditMode}
              autoFocus
              value={this.state.status}
              onChange={this.onStatusChange}
            />
          </div>
        )}
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
      </div>
    );
  }
}
