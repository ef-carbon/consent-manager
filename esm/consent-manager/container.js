import EventEmitter from 'events'
import React from 'react'
import Banner from './banner'
import PreferenceDialog from './preference-dialog'
import CancelDialog from './cancel-dialog'
import { ADVERTISING_CATEGORIES, FUNCTIONAL_CATEGORIES } from './categories'
var emitter = new EventEmitter()
export function openDialog() {
  emitter.emit('openDialog')
}
function normalizeDestinations(destinations) {
  var marketingDestinations = []
  var advertisingDestinations = []
  var functionalDestinations = []
  var _loop_1 = function(destination) {
    if (
      ADVERTISING_CATEGORIES.find(function(c) {
        return c === destination.category
      })
    ) {
      advertisingDestinations.push(destination)
    } else if (
      FUNCTIONAL_CATEGORIES.find(function(c) {
        return c === destination.category
      })
    ) {
      functionalDestinations.push(destination)
    } else {
      // Fallback to marketing
      marketingDestinations.push(destination)
    }
  }
  for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
    var destination = destinations_1[_i]
    _loop_1(destination)
  }
  return {
    marketingDestinations: marketingDestinations,
    advertisingDestinations: advertisingDestinations,
    functionalDestinations: functionalDestinations
  }
}
var Container = function(props) {
  var _a = React.useState(
      false || (props.workspaceAddedNewDestinations && props.defaultDestinationBehavior === 'ask')
    ),
    isDialogOpen = _a[0],
    toggleDialog = _a[1]
  var _b = React.useState(true),
    showBanner = _b[0],
    toggleBanner = _b[1]
  var _c = React.useState(false),
    isCancelling = _c[0],
    toggleCancel = _c[1]
  var banner = React.useRef(null)
  var preferenceDialog = React.useRef(null)
  var cancelDialog = React.useRef(null)
  var _d = normalizeDestinations(props.destinations),
    marketingDestinations = _d.marketingDestinations,
    advertisingDestinations = _d.advertisingDestinations,
    functionalDestinations = _d.functionalDestinations
  var onAcceptAll = function() {
    var truePreferences = Object.keys(props.preferences).reduce(function(acc, category) {
      acc[category] = true
      return acc
    }, {})
    props.setPreferences(truePreferences)
    return props.saveConsent()
  }
  var onDenyAll = function() {
    var falsePreferences = Object.keys(props.preferences).reduce(function(acc, category) {
      acc[category] = false
      return acc
    }, {})
    props.setPreferences(falsePreferences)
    return props.saveConsent()
  }
  var onClose = function() {
    if (props.closeBehavior === undefined || props.closeBehavior === 'dismiss') {
      return toggleBanner(false)
    }
    if (props.closeBehavior === 'accept') {
      toggleBanner(false)
      return onAcceptAll()
    }
    if (props.closeBehavior === 'deny') {
      toggleBanner(false)
      return onDenyAll()
    }
    // closeBehavior is a custom function
    var customClosePreferences = props.closeBehavior(props.preferences)
    props.setPreferences(customClosePreferences)
    props.saveConsent()
    return toggleBanner(false)
  }
  var showDialog = function() {
    return toggleDialog(true)
  }
  var handleBodyClick = function(e) {
    // Do nothing if no new implicit consent needs to be saved
    if (
      !props.isConsentRequired ||
      !props.implyConsentOnInteraction ||
      props.newDestinations.length === 0
    ) {
      return
    }
    // Ignore propogated clicks from inside the consent manager
    if (
      (banner.current && banner.current.contains(e.target)) ||
      (preferenceDialog.current && preferenceDialog.current.contains(e.target)) ||
      (cancelDialog.current && cancelDialog.current.contains(e.target)) ||
      'subContentBtn' === e.target.id
    ) {
      return
    }
    // Accept all consent on page interaction.
    if (!isDialogOpen && props.implyConsentOnInteraction) {
      onAcceptAll()
    }
  }
  React.useEffect(function() {
    emitter.on('openDialog', showDialog)
    if (props.isConsentRequired && props.implyConsentOnInteraction) {
      document.body.addEventListener('click', handleBodyClick, false)
    }
    return function() {
      emitter.removeListener('openDialog', showDialog)
      document.body.removeEventListener('click', handleBodyClick, false)
    }
  })
  React.useEffect(
    function() {
      if (isDialogOpen) {
        props.resetPreferences()
      }
    },
    [isDialogOpen]
  )
  var handleCategoryChange = function(category, value) {
    var _a
    props.setPreferences(((_a = {}), (_a[category] = value), _a))
  }
  var handleSave = function() {
    toggleDialog(false)
    props.saveConsent(undefined, false)
  }
  var handleCancel = function() {
    // Only show the cancel confirmation if there's unconsented destinations
    if (props.newDestinations.length > 0) {
      toggleCancel(true)
    } else {
      toggleDialog(false)
      props.resetPreferences()
    }
  }
  var handleCancelBack = function() {
    toggleCancel(false)
  }
  var handleCancelConfirm = function() {
    toggleCancel(false)
    toggleDialog(false)
    props.resetPreferences()
  }
  return React.createElement(
    React.Fragment,
    null,
    showBanner &&
      props.isConsentRequired &&
      props.newDestinations.length > 0 &&
      React.createElement(Banner, {
        innerRef: function(current) {
          return (banner = { current: current })
        },
        onClose: onClose,
        onChangePreferences: function() {
          return toggleDialog(true)
        },
        content: props.bannerContent,
        subContent: props.bannerSubContent,
        actionsBlock: props.bannerActionsBlock,
        textColor: props.bannerTextColor,
        backgroundColor: props.bannerBackgroundColor,
        onAcceptAll: onAcceptAll,
        onDenyAll: onDenyAll,
        hideCloseButton: props.bannerHideCloseButton,
        asModal: props.bannerAsModal
      }),
    isDialogOpen &&
      React.createElement(PreferenceDialog, {
        customCategories: props.customCategories,
        destinations: props.destinations,
        preferences: props.preferences,
        innerRef: function(current) {
          return (preferenceDialog = { current: current })
        },
        onCancel: handleCancel,
        onSave: handleSave,
        onChange: handleCategoryChange,
        marketingDestinations: marketingDestinations,
        advertisingDestinations: advertisingDestinations,
        functionalDestinations: functionalDestinations,
        marketingAndAnalytics: props.preferences.marketingAndAnalytics,
        advertising: props.preferences.advertising,
        functional: props.preferences.functional,
        title: props.preferencesDialogTitle,
        content: props.preferencesDialogContent,
        preferencesDialogTemplate: props.preferencesDialogTemplate
      }),
    isCancelling &&
      React.createElement(CancelDialog, {
        innerRef: function(current) {
          return (cancelDialog = { current: current })
        },
        onBack: handleCancelBack,
        onConfirm: handleCancelConfirm,
        title: props.cancelDialogTitle,
        content: props.cancelDialogContent,
        preferencesDialogTemplate: props.preferencesDialogTemplate
      })
  )
}
export default Container
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9jb250YWluZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sWUFBWSxNQUFNLFFBQVEsQ0FBQTtBQUNqQyxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDekIsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFBO0FBQzdCLE9BQU8sZ0JBQWdCLE1BQU0scUJBQXFCLENBQUE7QUFDbEQsT0FBTyxZQUFZLE1BQU0saUJBQWlCLENBQUE7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sY0FBYyxDQUFBO0FBVzVFLElBQU0sT0FBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7QUFDbEMsTUFBTSxVQUFVLFVBQVU7SUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUM1QixDQUFDO0FBc0NELFNBQVMscUJBQXFCLENBQUMsWUFBMkI7SUFDeEQsSUFBTSxxQkFBcUIsR0FBa0IsRUFBRSxDQUFBO0lBQy9DLElBQU0sdUJBQXVCLEdBQWtCLEVBQUUsQ0FBQTtJQUNqRCxJQUFNLHNCQUFzQixHQUFrQixFQUFFLENBQUE7NEJBRXJDLFdBQVc7UUFDcEIsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssV0FBVyxDQUFDLFFBQVEsRUFBMUIsQ0FBMEIsQ0FBQyxFQUFFO1lBQ2hFLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUMxQzthQUFNLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQTFCLENBQTBCLENBQUMsRUFBRTtZQUN0RSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDekM7YUFB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
