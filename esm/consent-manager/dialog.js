var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw })
    } else {
      cooked.raw = raw
    }
    return cooked
  }
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import nanoid from 'nanoid'
import fontStyles from './font-styles'
var ANIMATION_DURATION = '200ms'
var ANIMATION_EASING = 'cubic-bezier(0.0, 0.0, 0.2, 1)'
var Overlay = styled('div')(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(67, 90, 111, 0.699);\n'
      ],
      [
        '\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(67, 90, 111, 0.699);\n'
      ]
    ))
)
var openAnimation = keyframes(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n'
      ],
      [
        '\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n'
      ]
    ))
)
var Root = styled('section')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100vw - 16px);\n  max-height: calc(100% - 16px);\n  width: ',
        ';\n  margin: 8px;\n  background: #fff;\n  border-radius: 8px;\n  animation: ',
        ' ',
        ' ',
        ' both;\n'
      ],
      [
        '\n  ',
        ';\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100vw - 16px);\n  max-height: calc(100% - 16px);\n  width: ',
        ';\n  margin: 8px;\n  background: #fff;\n  border-radius: 8px;\n  animation: ',
        ' ',
        ' ',
        ' both;\n'
      ]
    )),
  fontStyles,
  function(props) {
    return props.width
  },
  openAnimation,
  ANIMATION_DURATION,
  ANIMATION_EASING
)
var Form = styled('form')(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      ['\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n'],
      ['\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n']
    ))
)
var Header = styled('div')(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        '\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(67, 90, 111, 0.079);\n'
      ],
      [
        '\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(67, 90, 111, 0.079);\n'
      ]
    ))
)
var Title = styled('h2')(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        '\n  margin: 0;\n  color: #1f4160;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.3;\n'
      ],
      [
        '\n  margin: 0;\n  color: #1f4160;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.3;\n'
      ]
    ))
)
var HeaderCancelButton = styled('button')(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        '\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n'
      ],
      [
        '\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n'
      ]
    ))
)
var Content = styled('div')(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      [
        '\n  overflow-y: auto;\n  padding: 16px;\n  padding-bottom: 0;\n  min-height: 0;\n  font-size: 14px;\n  line-height: 1.2;\n\n  p {\n    margin: 0;\n    &:not(:last-child) {\n      margin-bottom: 0.7em;\n    }\n  }\n\n  a {\n    color: #47b881;\n    &:hover {\n      color: #64c395;\n    }\n    &:active {\n      color: #248953;\n    }\n  }\n'
      ],
      [
        '\n  overflow-y: auto;\n  padding: 16px;\n  padding-bottom: 0;\n  min-height: 0;\n  font-size: 14px;\n  line-height: 1.2;\n\n  p {\n    margin: 0;\n    &:not(:last-child) {\n      margin-bottom: 0.7em;\n    }\n  }\n\n  a {\n    color: #47b881;\n    &:hover {\n      color: #64c395;\n    }\n    &:active {\n      color: #248953;\n    }\n  }\n'
      ]
    ))
)
var Buttons = styled('div')(
  templateObject_9 ||
    (templateObject_9 = __makeTemplateObject(
      ['\n  padding: 16px;\n  text-align: right;\n'],
      ['\n  padding: 16px;\n  text-align: right;\n']
    ))
)
var Dialog = /** @class */ (function(_super) {
  __extends(Dialog, _super)
  function Dialog(props) {
    var _this = _super.call(this, props) || this
    _this.handleRootRef = function(node) {
      _this.root = node
    }
    _this.handleFormRef = function(node) {
      _this.form = node
    }
    _this.handleOverlayClick = function(e) {
      var onCancel = _this.props.onCancel
      // Ignore propogated clicks from inside the dialog
      if (onCancel && _this.root && !_this.root.contains(e.target)) {
        onCancel()
      }
    }
    _this.handleEsc = function(e) {
      var onCancel = _this.props.onCancel
      // Esc key
      if (onCancel && e.keyCode === 27) {
        onCancel()
      }
    }
    _this.titleId = nanoid()
    _this.container = document.createElement('div')
    _this.container.setAttribute('data-consent-manager-dialog', '')
    return _this
  }
  Dialog.prototype.render = function() {
    var _a = this.props,
      onCancel = _a.onCancel,
      onSubmit = _a.onSubmit,
      title = _a.title,
      children = _a.children,
      buttons = _a.buttons,
      width = _a.width
    var dialog = React.createElement(
      Overlay,
      { id: 'segmentio_overlayDialog', onClick: this.handleOverlayClick },
      React.createElement(
        Root,
        {
          id: 'segmentio_rootDialog',
          ref: this.handleRootRef,
          role: 'dialog',
          'aria-modal': true,
          'aria-labelledby': this.titleId,
          width: width
        },
        React.createElement(
          Header,
          { id: 'segmentio_headerDialog' },
          React.createElement(Title, { id: this.titleId }, title),
          onCancel &&
            React.createElement(
              HeaderCancelButton,
              {
                id: 'segmentio_headerCancelBtn',
                onClick: onCancel,
                title: 'Cancel',
                'aria-label': 'Cancel'
              },
              '\u2715'
            )
        ),
        React.createElement(
          Form,
          {
            id: 'preferenceDialogForm_' + this.titleId,
            ref: this.handleFormRef,
            onSubmit: onSubmit
          },
          React.createElement(Content, { id: 'segmentio_contentDialog' }, children),
          React.createElement(Buttons, { id: 'segmentio_buttonsDialog' }, buttons)
        )
      )
    )
    return ReactDOM.createPortal(dialog, this.container)
  }
  Dialog.prototype.componentDidMount = function() {
    var innerRef = this.props.innerRef
    if (this.form) {
      var input = this.form.querySelector('input,button')
      if (input) {
        input.focus()
      }
    }
    document.body.appendChild(this.container)
    document.body.addEventListener('keydown', this.handleEsc, false)
    document.body.style.overflow = 'hidden'
    innerRef(this.container)
  }
  Dialog.prototype.componentWillUnmount = function() {
    var innerRef = this.props.innerRef
    document.body.removeEventListener('keydown', this.handleEsc, false)
    document.body.style.overflow = ''
    document.body.removeChild(this.container)
    innerRef(null)
  }
  Dialog.displayName = 'Dialog'
  Dialog.defaultProps = {
    onCancel: undefined,
    width: '750px'
  }
  return Dialog
})(PureComponent)
export default Dialog
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8,
  templateObject_9
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9kaWFsb2cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFDNUMsT0FBTyxRQUFRLE1BQU0sV0FBVyxDQUFBO0FBQ2hDLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFBO0FBQ3BDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUUxQyxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUE7QUFDM0IsT0FBTyxVQUFVLE1BQU0sZUFBZSxDQUFBO0FBRXRDLElBQU0sa0JBQWtCLEdBQUcsT0FBTyxDQUFBO0FBQ2xDLElBQU0sZ0JBQWdCLEdBQUcsZ0NBQWdDLENBQUE7QUFFekQsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyw4UUFBQSwyTUFXNUIsSUFBQSxDQUFBO0FBRUQsSUFBTSxhQUFhLEdBQUcsU0FBUywyTEFBQSx3SEFTOUIsSUFBQSxDQUFBO0FBTUQsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnVEFBVyxNQUNyQyxFQUFVLCtIQUtILEVBQW9CLDhFQUloQixFQUFhLEdBQUksRUFBa0IsR0FBSSxFQUFnQixVQUNyRSxLQVZHLFVBQVUsRUFLSCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxFQUloQixhQUFhLEVBQUksa0JBQWtCLEVBQUksZ0JBQWdCLENBQ3JFLENBQUE7QUFFRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLHNJQUFBLG1FQUkxQixJQUFBLENBQUE7QUFFRCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLG9QQUFBLGlMQU8zQixJQUFBLENBQUE7QUFFRCxJQUFNLEtBQUssR0FBRyxN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
