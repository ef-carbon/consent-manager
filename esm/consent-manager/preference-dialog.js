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
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Dialog from './dialog'
import { DefaultButton, GreenButton } from './buttons'
var hideOnMobile = css(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n'],
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n']
    ))
)
var TableScroll = styled('div')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n'],
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n']
    ))
)
var Table = styled('table')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n'],
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n']
    ))
)
var ColumnHeading = styled('th')(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n'
      ],
      [
        '\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n'
      ]
    ))
)
var RowHeading = styled('th')(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['\n  font-weight: normal;\n  text-align: left;\n'],
      ['\n  font-weight: normal;\n  text-align: left;\n']
    ))
)
var Row = styled('tr')(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        '\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n'
      ],
      [
        '\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n'
      ]
    ))
)
var InputCell = styled('td')(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        '\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n  td {\n    border: none;\n    vertical-align: middle;\n  }\n'
      ],
      [
        '\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n  td {\n    border: none;\n    vertical-align: middle;\n  }\n'
      ]
    ))
)
var PreferenceDialog = /** @class */ (function(_super) {
  __extends(PreferenceDialog, _super)
  function PreferenceDialog() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.handleChange = function(e) {
      var onChange = _this.props.onChange
      onChange(e.target.name, e.target.value === 'true')
    }
    _this.handleSubmit = function(e) {
      var _a = _this.props,
        onSave = _a.onSave,
        preferences = _a.preferences,
        marketingAndAnalytics = _a.marketingAndAnalytics,
        advertising = _a.advertising,
        functional = _a.functional,
        customCategories = _a.customCategories
      e.preventDefault()
      // Safe guard against browsers that don't prevent the
      // submission of invalid forms (Safari < 10.1)
      if (
        !customCategories &&
        (marketingAndAnalytics === null || advertising === null || functional === null)
      ) {
        return
      }
      // Safe guard against custom categories being null
      if (
        customCategories &&
        Object.keys(customCategories).some(function(category) {
          return preferences[category] === null
        })
      ) {
        return
      }
      onSave()
    }
    return _this
  }
  PreferenceDialog.prototype.render = function() {
    var _this = this
    var _a = this.props,
      innerRef = _a.innerRef,
      onCancel = _a.onCancel,
      marketingDestinations = _a.marketingDestinations,
      advertisingDestinations = _a.advertisingDestinations,
      functionalDestinations = _a.functionalDestinations,
      marketingAndAnalytics = _a.marketingAndAnalytics,
      advertising = _a.advertising,
      functional = _a.functional,
      customCategories = _a.customCategories,
      destinations = _a.destinations,
      title = _a.title,
      content = _a.content,
      preferences = _a.preferences,
      preferencesDialogTemplate = _a.preferencesDialogTemplate
    var _b = preferencesDialogTemplate,
      headings = _b.headings,
      checkboxes = _b.checkboxes,
      actionButtons = _b.actionButtons
    var functionalInfo =
      preferencesDialogTemplate === null || preferencesDialogTemplate === void 0
        ? void 0
        : preferencesDialogTemplate.categories.find(function(c) {
            return c.key === 'functional'
          })
    var marketingInfo =
      preferencesDialogTemplate === null || preferencesDialogTemplate === void 0
        ? void 0
        : preferencesDialogTemplate.categories.find(function(c) {
            return c.key === 'marketing'
          })
    var advertisingInfo =
      preferencesDialogTemplate === null || preferencesDialogTemplate === void 0
        ? void 0
        : preferencesDialogTemplate.categories.find(function(c) {
            return c.key === 'advertising'
          })
    var essentialInfo =
      preferencesDialogTemplate === null || preferencesDialogTemplate === void 0
        ? void 0
        : preferencesDialogTemplate.categories.find(function(c) {
            return c.key === 'essential'
          })
    var buttons = React.createElement(
      'div',
      null,
      React.createElement(
        DefaultButton,
        { id: 'segmentio_segmentio_prefBtnCancel', type: 'button', onClick: onCancel },
        actionButtons.cancelValue
      ),
      React.createElement(
        GreenButton,
        { id: 'segmentio_prefBtnSubmit', type: 'submit' },
        actionButtons.saveValue
      )
    )
    return React.createElement(
      Dialog,
      {
        innerRef: innerRef,
        title: title,
        buttons: buttons,
        onCancel: onCancel,
        onSubmit: this.handleSubmit
      },
      content,
      React.createElement(
        TableScroll,
        { id: 'segmentio_prefTableScroll' },
        React.createElement(
          Table,
          { id: 'segmentio_prefTable' },
          React.createElement(
            'thead',
            { id: 'segmentio_prefThead' },
            React.createElement(
              Row,
              null,
              React.createElement(ColumnHeading, { scope: 'col' }, headings.allowValue),
              React.createElement(ColumnHeading, { scope: 'col' }, headings.categoryValue),
              React.createElement(ColumnHeading, { scope: 'col' }, headings.purposeValue),
              React.createElement(
                ColumnHeading,
                { scope: 'col', css: hideOnMobile },
                headings.toolsValue
              )
            )
          ),
          React.createElement(
            'tbody',
            { id: 'segmentio_prefTbody' },
            !customCategories &&
              React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
                        type: 'radio',
                        name: 'functional',
                        value: 'true',
                        checked: functional === true,
                        onChange: this.handleChange,
                        'aria-label': 'Allow functional tracking',
                        required: true
                      }),
                      ' ',
                      checkboxes.yesValue
                    ),
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
                        type: 'radio',
                        name: 'functional',
                        value: 'false',
                        checked: functional === false,
                        onChange: this.handleChange,
                        'aria-label': 'Disallow functional tracking',
                        required: true
                      }),
                      ' ',
                      checkboxes.noValue
                    )
                  ),
                  React.createElement(
                    RowHeading,
                    { scope: 'row' },
                    functionalInfo === null || functionalInfo === void 0
                      ? void 0
                      : functionalInfo.name
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'p',
                      null,
                      functionalInfo === null || functionalInfo === void 0
                        ? void 0
                        : functionalInfo.description
                    ),
                    React.createElement(
                      'p',
                      { css: hideOnMobile },
                      functionalInfo === null || functionalInfo === void 0
                        ? void 0
                        : functionalInfo.example
                    )
                  ),
                  React.createElement(
                    'td',
                    { css: hideOnMobile },
                    functionalDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
                        type: 'radio',
                        name: 'marketingAndAnalytics',
                        value: 'true',
                        checked: marketingAndAnalytics === true,
                        onChange: this.handleChange,
                        'aria-label': 'Allow marketing and analytics tracking',
                        required: true
                      }),
                      ' ',
                      checkboxes.yesValue
                    ),
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
                        type: 'radio',
                        name: 'marketingAndAnalytics',
                        value: 'false',
                        checked: marketingAndAnalytics === false,
                        onChange: this.handleChange,
                        'aria-label': 'Disallow marketing and analytics tracking',
                        required: true
                      }),
                      ' ',
                      checkboxes.noValue
                    )
                  ),
                  React.createElement(
                    RowHeading,
                    { scope: 'row' },
                    marketingInfo === null || marketingInfo === void 0 ? void 0 : marketingInfo.name
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'p',
                      null,
                      marketingInfo === null || marketingInfo === void 0
                        ? void 0
                        : marketingInfo.description
                    ),
                    React.createElement(
                      'p',
                      { css: hideOnMobile },
                      marketingInfo === null || marketingInfo === void 0
                        ? void 0
                        : marketingInfo.example
                    )
                  ),
                  React.createElement(
                    'td',
                    { css: hideOnMobile },
                    marketingDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
                        type: 'radio',
                        name: 'advertising',
                        value: 'true',
                        checked: advertising === true,
                        onChange: this.handleChange,
                        'aria-label': 'Allow advertising tracking',
                        required: true
                      }),
                      ' ',
                      checkboxes.yesValue
                    ),
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
                        type: 'radio',
                        name: 'advertising',
                        value: 'false',
                        checked: advertising === false,
                        onChange: this.handleChange,
                        'aria-label': 'Disallow advertising tracking',
                        required: true
                      }),
                      ' ',
                      checkboxes.noValue
                    )
                  ),
                  React.createElement(
                    RowHeading,
                    { scope: 'row' },
                    advertisingInfo === null || advertisingInfo === void 0
                      ? void 0
                      : advertisingInfo.name
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'p',
                      null,
                      advertisingInfo === null || advertisingInfo === void 0
                        ? void 0
                        : advertisingInfo.description
                    ),
                    React.createElement(
                      'p',
                      { css: hideOnMobile },
                      advertisingInfo === null || advertisingInfo === void 0
                        ? void 0
                        : advertisingInfo.example
                    )
                  ),
                  React.createElement(
                    'td',
                    { css: hideOnMobile },
                    advertisingDestinations
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                React.createElement(
                  Row,
                  null,
                  React.createElement('td', null, 'N/A'),
                  React.createElement(
                    RowHeading,
                    { scope: 'row' },
                    essentialInfo === null || essentialInfo === void 0 ? void 0 : essentialInfo.name
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'p',
                      null,
                      essentialInfo === null || essentialInfo === void 0
                        ? void 0
                        : essentialInfo.description
                    ),
                    React.createElement(
                      'p',
                      null,
                      essentialInfo === null || essentialInfo === void 0
                        ? void 0
                        : essentialInfo.example
                    )
                  ),
                  React.createElement('td', { css: hideOnMobile })
                )
              ),
            customCategories &&
              Object.entries(customCategories).map(function(_a) {
                var categoryName = _a[0],
                  _b = _a[1],
                  integrations = _b.integrations,
                  purpose = _b.purpose
                return React.createElement(
                  Row,
                  { key: categoryName },
                  React.createElement(
                    InputCell,
                    null,
                    preferences[categoryName] === 'N/A'
                      ? React.createElement('td', null, 'N/A')
                      : React.createElement(
                          React.Fragment,
                          null,
                          React.createElement(
                            'label',
                            null,
                            React.createElement('input', {
                              type: 'radio',
                              name: categoryName,
                              value: 'true',
                              checked: preferences[categoryName] === true,
                              onChange: _this.handleChange,
                              'aria-label': 'Allow "' + categoryName + '" tracking',
                              required: true
                            }),
                            ' ',
                            checkboxes.yesValue
                          ),
                          React.createElement(
                            'label',
                            null,
                            React.createElement('input', {
                              type: 'radio',
                              name: categoryName,
                              value: 'false',
                              checked: preferences[categoryName] === false,
                              onChange: _this.handleChange,
                              'aria-label': 'Disallow "' + categoryName + '" tracking',
                              required: true
                            }),
                            ' ',
                            checkboxes.noValue
                          )
                        )
                  ),
                  React.createElement(RowHeading, { scope: 'row' }, categoryName),
                  React.createElement('td', null, React.createElement('p', null, purpose)),
                  React.createElement(
                    'td',
                    { css: hideOnMobile },
                    destinations
                      .filter(function(d) {
                        return integrations.includes(d.id)
                      })
                      .map(function(d) {
                        return d.name
                      })
                      .join(', ')
                  )
                )
              })
          )
        )
      )
    )
  }
  PreferenceDialog.displayName = 'PreferenceDialog'
  PreferenceDialog.defaultProps = {
    marketingAndAnalytics: null,
    advertising: null,
    functional: null
  }
  return PreferenceDialog
})(PureComponent)
export default PreferenceDialog
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS1kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL3ByZWZlcmVuY2UtZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFBO0FBQzVDLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFBO0FBQ3BDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUNwQyxPQUFPLE1BQU0sTUFBTSxVQUFVLENBQUE7QUFDN0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFRdEQsSUFBTSxZQUFZLEdBQUcsR0FBRywrSEFBQSw0REFJdkIsSUFBQSxDQUFBO0FBRUQsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxpSEFBQSw4Q0FHaEMsSUFBQSxDQUFBO0FBRUQsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyx5SEFBQSxzREFHNUIsSUFBQSxDQUFBO0FBRUQsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxrTEFBQSwrR0FNakMsSUFBQSxDQUFBO0FBRUQsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxvSEFBQSxpREFHOUIsSUFBQSxDQUFBO0FBRUQsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxrT0FBQSwrSkFVdkIsSUFBQSxDQUFBO0FBRUQsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyx5UUFBQSxzTUFhN0IsSUFBQSxDQUFBO0FBcUJEO0lBQThDLG9DQUF3QztJQUF0RjtRQUFBLHFFQXlSQztRQWpDQyxrQkFBWSxHQUFHLFVBQUEsQ0FBQztZQUNOLElBQUEsUUFBUSxHQUFLLEtBQUksQ0FBQyxLQUFLLFNBQWYs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
