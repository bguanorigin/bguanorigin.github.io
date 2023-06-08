// Add a toolbar button to the toolbar, when the button is clicked, show a popover.
// https://developer.wordpress.org/block-editor/how-to-guides/format-api/
import { registerFormatType } from '@wordpress/rich-text';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';

const ACFValue = ( { isActive, onChange, value } ) => {
    const [ isVisible, setIsVisible ] = useState( false );
    const toggleVisible = () => {
        setIsVisible( ( state ) => ! state );
        console.log('toggle')
    };
    return (
        <BlockControls>
            <ToolbarGroup>
                <ToolbarButton
                    icon="drumstick"
                    title="ACF Value"
                    onClick={ () => {
                        console.log('test')
                        toggleVisible()
                        onChange(
                            console.log(value.text.substring(value.start, value.end))
                        );
                    } }
                    isActive={ isActive }
                />
            </ToolbarGroup>
            { isVisible && 
            <Popover>
                Popover is toggled!
            </Popover> 
            }
        </BlockControls>
    );
};

registerFormatType( 'origin-custom-format/acf-value', {
    title: 'ACF Value',
    tagName: 'acf',
    className: null,
    edit: ACFValue
} );
