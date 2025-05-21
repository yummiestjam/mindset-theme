/**
* Retrieves the translation of text.
*
* @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
*/
import { __ } from '@wordpress/i18n';
 
/**
* Provides utilities to interact with block props and render block content.
* - useBlockProps: Handles block wrapper attributes like className and styles.
* - RichText: A component for rich text editing within blocks.
* - InspectorControls: Allows adding custom controls to the block editor sidebar.
* 
* @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/
*/
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
 
/**
* Enables interaction with WordPress entities (e.g., posts, users) using the core data store.
* - useEntityProp: Allows easy access to WordPress custom fields.
* 
* @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-core-data/#useentityprop
*/
import { useEntityProp } from '@wordpress/core-data';
 
/**
* Provides pre-built UI components for creating block settings in the editor.
* - PanelBody: Groups settings into collapsible panels.
* - PanelRow: Lays out content or controls in rows within a panel.
* - ToggleControl: A toggle switch control for boolean settings.
* 
* @see https://developer.wordpress.org/block-editor/reference-guides/components/panel/
* @see https://developer.wordpress.org/block-editor/reference-guides/components/toggle-control/
*/
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( {attributes, setAttributes} ) {
	const postID = 15;
	const [meta, setMeta] = useEntityProp('postType', 'page', 'meta', postID);
	// const { company_email } = meta;

	 // this line is from chatgpt, while i was trying to debug.
	 // the console was throwing errors even when displaying the address right,
	 // seemingly because meta was undefined
	const { company_email = '' } = meta || {};
	const updateMeta = (key, value) => {
		setMeta({...meta, [key]: value});
	};
	const {svgIcon} = attributes;

	return (
		<>
			<address { ...useBlockProps() }>
				{ svgIcon && 
					<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22,3H2A1,1,0,0,0,1,4V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V4A1,1,0,0,0,22,3ZM21,19H3V9.477l8.628,3.452a1.01,1.01,0,0,0,.744,0L21,9.477ZM21,7.323l-9,3.6-9-3.6V5H21Z"></path></g></svg>
				}
				<RichText
					placeholder={ __( 'Enter email address here...', 'mindset-blocks' ) }
					tagName="p"
					value={ company_email }
					onChange={ ( nextValue ) => updateMeta("company_email", nextValue) }
				/>
			</address>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'mindset-blocks' ) }>
					<PanelRow>
						<ToggleControl
							label={ __( 'Show SVG Icon', 'mindset-blocks' ) }
							checked={ svgIcon }
							onChange={ ( value ) =>
								setAttributes( { svgIcon: value } )
							}
							help={ __( 'Display an SVG icon next to the email.', 'mindset-blocks' ) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
