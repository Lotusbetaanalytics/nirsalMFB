import * as React from 'react';
import * as strings from 'QuicklinksWebPartStrings';
import styles from './Quicklinks.module.scss';
import { IQuicklinksProps } from './IQuicklinksProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Tile } from './Tile/Tile';


import { WebPartTitle } from '@pnp/spfx-controls-react/lib/WebPartTitle';
import { Placeholder } from '@pnp/spfx-controls-react/lib/Placeholder';


export default class Quicklinks extends React.Component<IQuicklinksProps, {}> {
  public render(): React.ReactElement<IQuicklinksProps> {
    return (
      <div className={ styles.quicklinks }>
          <WebPartTitle displayMode={this.props.displayMode}
          title={this.props.title}
          updateProperty={this.props.fUpdateProperty} />
        {
          this.props.collectionData && this.props.collectionData.length > 0 ? (
            <div className={styles.tilesList}>
              {
                this.props.collectionData.map((tile, idx) =>
                  <Tile key={idx} item={tile} height={this.props.tileHeight} />)
              }
            </div>
          ) : (
              <Placeholder
                iconName='Edit'
                iconText={strings.noTilesIconText}
                description={strings.noTilesConfigured}
                buttonLabel={strings.noTilesBtn}
                onConfigure={this.props.fPropertyPaneOpen} />
            )
        }
      </div>
    );
  }
}
