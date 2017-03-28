import React, { Component } from 'react';
import { Panel, Button, Container } from '@extjs/reactor/modern';

export default class ToolTipExample extends Component {
    render() {
        const containerDefaults = {
            margin: '0 0 50 0',
            layout: {
                type: Ext.platformTags.phone ? 'vbox' : 'hbox', 
                align: 'start', 
                pack: 'center' 
            }
        };

        const buttonDefaults = {
            margin: '0 15 0 0'
        };

        return (
            <Panel layout="vbox" shadow bodyPadding="20">
                <Container {...containerDefaults}>
                    <Button {...buttonDefaults} tooltip="A simple tooltip" text="Basic Tip"/>
                    
                    <Button 
                        {...buttonDefaults} 
                        text="autoHide: false"
                        tooltip={{ 
                            autoHide: false, 
                            title: 'Tip Title',
                            html: 'A simple tooltip',
                            closable: true 
                        }}
                    />
                    
                    <Button 
                        {...buttonDefaults} 
                        text="Mouse Track"
                        tooltip={{
                            title: 'Mouse Track',
                            html: 'This tip will follow the mouse while it is over the element',
                            trackMouse: true
                        }}
                    />
                </Container>

                <Container {...containerDefaults}>
                    <Button 
                        {...buttonDefaults} 
                        text="Anchor Right, Rich Content"
                        tooltip={{
                            styleHtmlContent: true,
                            html: '<ul style="margin-bottom: 15px;">' +
                                    '<li>5 bedrooms</li>' + 
                                    '<li>Close to transport</li>' +
                                    '<li>Large backyard</li>' +
                                '</ul>' +
                                '<img style="width: 400px; height: 300px;" src="resources/images/house.jpg" />',
                            align: 'tl-tr',
                            anchorToTarget: true,
                            anchor: true,
                            autoHide: false,
                            closable: true
                        }}
                    />

                    <Button 
                        {...buttonDefaults} 
                        text="Anchor Below"
                        tooltip={{
                            html: 'The anchor is centered',
                            anchorToTarget: true,
                            align: 'tc-bc',
                            anchor: true
                        }}
                    />

                    <Button 
                        {...buttonDefaults} 
                        text="Anchor with Tracking"
                        tooltip={{
                            html: 'Following the mouse with an anchor',
                            trackMouse: true,
                            align: 'l-r',
                            anchor: true
                        }}
                    />
                </Container>

                <Container {...containerDefaults} margin="0">
                    <div style={{...styles.qTipItem, ...styles.color1}} data-qtip="This tip is inline">Inline Tip</div>
                    <div style={{...styles.qTipItem, ...styles.color2}} data-qtip="This tip has a fixed width" data-qwidth="400">Fixed width inline tip</div>
                    <div style={{...styles.qTipItem, ...styles.color3}} data-qtip="This tip has a title" data-qtitle="The title">Inline tip with title</div>
                    <div style={{...styles.qTipItem, ...styles.color4}} data-qtip="Aligned top" data-qalign="bl-tl" data-qanchorToTarget="true">Inline tip align top</div>
                </Container>
            </Panel>
        )
    }
}

const styles = {
    qTipItem: {
        width: '150px',
        margin: '0 15px 0 0',
        color: 'white',
        padding: '5px 10px',
        textAlign: 'center',
        cursor: 'default'
    },
    color1: {
        backgroundColor: '#e91e63'
    },
    color2: {
        backgroundColor: '#2196f3'
    },
    color3: {
        backgroundColor: '#ff5722'
    },
    color4: {
        backgroundColor: '#607d8b'
    },
};