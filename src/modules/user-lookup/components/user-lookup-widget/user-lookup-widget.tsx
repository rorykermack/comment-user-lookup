
/* Libs */
import * as React from 'react';
/* --- Libs */

/* Styles */
import './user-lookup-widget.scss';
/* --- Styles */

interface UserLookupWidgetProps {
  userSearchResults: any[];
  onSelectUserRef: Function;
}

const UserLookupWidget = ({
  userSearchResults,
  onSelectUserRef
}: UserLookupWidgetProps) => {
  if (userSearchResults.length === 0) return null;
  return (
    <div className="user-lookup">
      {userSearchResults.map((sr, i) => {
        return (
          <div key={`u-r${i}`} className="user-result" onClick={() => onSelectUserRef(sr)}>
            <div className="user-avatar" style={{backgroundImage: `url(${sr.avatar_url})`}} />
            <p>{sr.name} ({sr.username})</p>
          </div>
        )
      })}
    </div>
  );
};

export default UserLookupWidget;