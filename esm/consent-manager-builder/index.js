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
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this
        }),
      g
    )
    function verb(n) {
      return function(v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j]
    return r
  }
import { Component } from 'react'
import { loadPreferences, savePreferences } from './preferences'
import fetchDestinations from './fetch-destinations'
import conditionallyLoadAnalytics from './analytics'
function getNewDestinations(destinations, preferences) {
  var newDestinations = []
  // If there are no preferences then all destinations are new
  if (!preferences) {
    return destinations
  }
  for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
    var destination = destinations_1[_i]
    if (preferences[destination.id] === undefined) {
      newDestinations.push(destination)
    }
  }
  return newDestinations
}
var DEFAULT_CATEGORIES = {
  functional: false,
  marketingAndAnalytics: false,
  advertising: false,
  essential: false
}
var ConsentManagerBuilder = /** @class */ (function(_super) {
  __extends(ConsentManagerBuilder, _super)
  function ConsentManagerBuilder() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {
      isLoading: true,
      destinations: [],
      newDestinations: [],
      preferences: {},
      destinationPreferences: {},
      isConsentRequired: true,
      havePreferencesChanged: false,
      workspaceAddedNewDestinations: false,
      useDefaultCategories: false
    }
    _this.initialise = function() {
      return __awaiter(_this, void 0, void 0, function() {
        var _a,
          writeKey,
          _b,
          otherWriteKeys,
          _c,
          shouldRequireConsent,
          initialPreferences,
          mapCustomPreferences,
          defaultDestinationBehavior,
          cookieName,
          _d,
          cdnHost,
          _e,
          shouldReload,
          _f,
          devMode,
          _g,
          useDefaultCategories,
          _h,
          destinationPreferences,
          customPreferences,
          _j,
          isConsentRequired,
          destinations,
          newDestinations,
          workspaceAddedNewDestinations,
          preferences,
          initialPrefencesHaveValue,
          emptyCustomPreferecences,
          mapped
        return __generator(this, function(_k) {
          switch (_k.label) {
            case 0:
              ;(_a = this.props),
                (writeKey = _a.writeKey),
                (_b = _a.otherWriteKeys),
                (otherWriteKeys =
                  _b === void 0 ? ConsentManagerBuilder.defaultProps.otherWriteKeys : _b),
                (_c = _a.shouldRequireConsent),
                (shouldRequireConsent =
                  _c === void 0 ? ConsentManagerBuilder.defaultProps.shouldRequireConsent : _c),
                (initialPreferences = _a.initialPreferences),
                (mapCustomPreferences = _a.mapCustomPreferences),
                (defaultDestinationBehavior = _a.defaultDestinationBehavior),
                (cookieName = _a.cookieName),
                (_d = _a.cdnHost),
                (cdnHost = _d === void 0 ? ConsentManagerBuilder.defaultProps.cdnHost : _d),
                (_e = _a.shouldReload),
                (shouldReload =
                  _e === void 0 ? ConsentManagerBuilder.defaultProps.shouldReload : _e),
                (_f = _a.devMode),
                (devMode = _f === void 0 ? ConsentManagerBuilder.defaultProps.devMode : _f),
                (_g = _a.useDefaultCategories),
                (useDefaultCategories =
                  _g === void 0 ? ConsentManagerBuilder.defaultProps.useDefaultCategories : _g)
              ;(_h = loadPreferences(cookieName)),
                (destinationPreferences = _h.destinationPreferences),
                (customPreferences = _h.customPreferences)
              return [
                4 /*yield*/,
                Promise.all([
                  shouldRequireConsent(),
                  fetchDestinations(cdnHost, __spreadArrays([writeKey], otherWriteKeys))
                ])
              ]
            case 1:
              ;(_j = _k.sent()), (isConsentRequired = _j[0]), (destinations = _j[1])
              newDestinations = getNewDestinations(destinations, destinationPreferences || {})
              workspaceAddedNewDestinations =
                destinationPreferences &&
                Object.keys(destinationPreferences).length > 0 &&
                newDestinations.length > 0
              initialPrefencesHaveValue = Object.values(initialPreferences || {}).some(function(v) {
                return v === true || v === false || v === 'N/A'
              })
              emptyCustomPreferecences = Object.values(customPreferences || {}).every(function(v) {
                return v === null || v === undefined || v === 'N/A'
              })
              if (mapCustomPreferences) {
                preferences = useDefaultCategories
                  ? DEFAULT_CATEGORIES
                  : customPreferences || initialPreferences || {}
                if (
                  (initialPrefencesHaveValue && emptyCustomPreferecences) ||
                  (defaultDestinationBehavior === 'imply' && workspaceAddedNewDestinations)
                ) {
                  mapped = mapCustomPreferences(destinations, preferences)
                  destinationPreferences = mapped.destinationPreferences
                  customPreferences = mapped.customPreferences
                  preferences = customPreferences
                }
              } else {
                preferences = useDefaultCategories
                  ? DEFAULT_CATEGORIES
                  : destinationPreferences || initialPreferences
              }
              conditionallyLoadAnalytics({
                writeKey: writeKey,
                destinations: destinations,
                destinationPreferences: destinationPreferences,
                isConsentRequired: isConsentRequired,
                shouldReload: shouldReload,
                devMode: devMode,
                defaultDestinationBehavior: defaultDestinationBehavior,
                categoryPreferences: preferences
              })
              this.setState({
                isLoading: false,
                destinations: destinations,
                newDestinations: newDestinations,
                preferences: preferences,
                isConsentRequired: isConsentRequired,
                destinationPreferences: destinationPreferences,
                workspaceAddedNewDestinations: Boolean(workspaceAddedNewDestinations)
              })
              return [2 /*return*/]
          }
        })
      })
    }
    _this.handleSetPreferences = function(newPreferences) {
      _this.setState(function(prevState) {
        var destinations = prevState.destinations,
          existingPreferences = prevState.preferences
        var preferences = _this.mergePreferences({
          destinations: destinations,
          newPreferences: newPreferences,
          existingPreferences: existingPreferences
        })
        return __assign(__assign({}, prevState), {
          preferences: preferences,
          havePreferencesChanged: true
        })
      })
    }
    _this.handleResetPreferences = function() {
      var _a = _this.props,
        initialPreferences = _a.initialPreferences,
        mapCustomPreferences = _a.mapCustomPreferences,
        cookieName = _a.cookieName
      var _b = loadPreferences(cookieName),
        destinationPreferences = _b.destinationPreferences,
        customPreferences = _b.customPreferences
      var preferences
      if (mapCustomPreferences) {
        preferences = customPreferences || initialPreferences
      } else {
        preferences = destinationPreferences || initialPreferences
      }
      _this.setState({ preferences: preferences })
    }
    _this.handleSaveConsent = function(newPreferences, shouldReload, devMode) {
      var _a = _this.props,
        writeKey = _a.writeKey,
        cookieDomain = _a.cookieDomain,
        cookieName = _a.cookieName,
        cookieExpires = _a.cookieExpires,
        cookieAttributes = _a.cookieAttributes,
        mapCustomPreferences = _a.mapCustomPreferences,
        defaultDestinationBehavior = _a.defaultDestinationBehavior
      _this.setState(function(prevState) {
        var destinations = prevState.destinations,
          existingPreferences = prevState.preferences,
          isConsentRequired = prevState.isConsentRequired
        var preferences = _this.mergePreferences({
          destinations: destinations,
          newPreferences: newPreferences,
          existingPreferences: existingPreferences
        })
        var destinationPreferences
        var customPreferences
        if (mapCustomPreferences) {
          var custom = mapCustomPreferences(destinations, preferences)
          destinationPreferences = custom.destinationPreferences
          customPreferences = custom.customPreferences
          if (customPreferences) {
            // Allow the customPreferences to be updated from mapCustomPreferences
            preferences = customPreferences
          } else {
            // Make returning the customPreferences from mapCustomPreferences optional
            customPreferences = preferences
          }
        } else {
          destinationPreferences = preferences
        }
        var newDestinations = getNewDestinations(destinations, destinationPreferences)
        if (
          prevState.havePreferencesChanged ||
          newDestinations.length > 0 ||
          typeof newPreferences === 'boolean'
        ) {
          shouldReload = true
        }
        savePreferences({
          destinationPreferences: destinationPreferences,
          customPreferences: customPreferences,
          cookieDomain: cookieDomain,
          cookieName: cookieName,
          cookieExpires: cookieExpires,
          cookieAttributes: cookieAttributes
        })
        conditionallyLoadAnalytics({
          writeKey: writeKey,
          destinations: destinations,
          destinationPreferences: destinationPreferences,
          isConsentRequired: isConsentRequired,
          shouldReload: shouldReload,
          devMode: devMode,
          defaultDestinationBehavior: defaultDestinationBehavior,
          categoryPreferences: customPreferences
        })
        return __assign(__assign({}, prevState), {
          destinationPreferences: destinationPreferences,
          preferences: preferences,
          newDestinations: newDestinations
        })
      })
    }
    _this.mergePreferences = function(args) {
      var destinations = args.destinations,
        existingPreferences = args.existingPreferences,
        newPreferences = args.newPreferences
      var preferences
      if (typeof newPreferences === 'boolean') {
        var destinationPreferences = {}
        for (var _i = 0, destinations_2 = destinations; _i < destinations_2.length; _i++) {
          var destination = destinations_2[_i]
          destinationPreferences[destination.id] = newPreferences
        }
        preferences = destinationPreferences
      } else if (newPreferences) {
        preferences = __assign(__assign({}, existingPreferences), newPreferences)
      } else {
        preferences = existingPreferences
      }
      return preferences
    }
    return _this
  }
  ConsentManagerBuilder.prototype.render = function() {
    var _a = this.props,
      children = _a.children,
      customCategories = _a.customCategories
    var _b = this.state,
      isLoading = _b.isLoading,
      destinations = _b.destinations,
      preferences = _b.preferences,
      newDestinations = _b.newDestinations,
      isConsentRequired = _b.isConsentRequired,
      havePreferencesChanged = _b.havePreferencesChanged,
      workspaceAddedNewDestinations = _b.workspaceAddedNewDestinations,
      destinationPreferences = _b.destinationPreferences
    if (isLoading) {
      return null
    }
    return children({
      destinations: destinations,
      customCategories: customCategories,
      newDestinations: newDestinations,
      preferences: preferences,
      isConsentRequired: isConsentRequired,
      havePreferencesChanged: havePreferencesChanged,
      workspaceAddedNewDestinations: workspaceAddedNewDestinations,
      destinationPreferences: destinationPreferences,
      setPreferences: this.handleSetPreferences,
      resetPreferences: this.handleResetPreferences,
      saveConsent: this.handleSaveConsent
    })
  }
  ConsentManagerBuilder.prototype.componentDidMount = function() {
    return __awaiter(this, void 0, void 0, function() {
      var onError, e_1
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            onError = this.props.onError
            if (!(onError && typeof onError === 'function')) return [3 /*break*/, 6]
            _a.label = 1
          case 1:
            _a.trys.push([1, 3, , 5])
            return [4 /*yield*/, this.initialise()]
          case 2:
            _a.sent()
            return [3 /*break*/, 5]
          case 3:
            e_1 = _a.sent()
            return [4 /*yield*/, onError(e_1)]
          case 4:
            _a.sent()
            return [3 /*break*/, 5]
          case 5:
            return [3 /*break*/, 8]
          case 6:
            return [4 /*yield*/, this.initialise()]
          case 7:
            _a.sent()
            _a.label = 8
          case 8:
            return [2 /*return*/]
        }
      })
    })
  }
  ConsentManagerBuilder.displayName = 'ConsentManagerBuilder'
  ConsentManagerBuilder.defaultProps = {
    otherWriteKeys: [],
    onError: undefined,
    shouldRequireConsent: function() {
      return true
    },
    initialPreferences: {},
    cdnHost: 'cdn.segment.com',
    shouldReload: true,
    devMode: false,
    useDefaultCategories: false
  }
  return ConsentManagerBuilder
})(Component)
export default ConsentManagerBuilder
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyLWJ1aWxkZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFBO0FBQ2pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ2hFLE9BQU8saUJBQWlCLE1BQU0sc0JBQXNCLENBQUE7QUFDcEQsT0FBTywwQkFBMEIsTUFBTSxhQUFhLENBQUE7QUFTcEQsU0FBUyxrQkFBa0IsQ0FBQyxZQUEyQixFQUFFLFdBQWdDO0lBQ3ZGLElBQU0sZUFBZSxHQUFrQixFQUFFLENBQUE7SUFFekMsNERBQTREO0lBQzVELElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDaEIsT0FBTyxZQUFZLENBQUE7S0FDcEI7SUFFRCxLQUEwQixVQUFZLEVBQVosNkJBQVksRUFBWiwwQkFBWSxFQUFaLElBQVksRUFBRTtRQUFuQyxJQUFNLFdBQVcscUJBQUE7UUFDcEIsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUM3QyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQ2xDO0tBQ0Y7SUFFRCxPQUFPLGVBQWUsQ0FBQTtBQUN4QixDQUFDO0FBOEdELElBQU0sa0JBQWtCLEdBQUc7SUFDekIsVUFBVSxFQUFFLEtBQUs7SUFDakIscUJBQXFCLEVBQUUsS0FBSztJQUM1QixXQUFXLEVBQUUsS0FBSztJQUNsQixTQUFTLEVBQUUsS0FBSztDQUNqQixDQUFBO0FBRUQ7SUFBbUQseUNBQXVCO0lBQTFFO1FBQUEscUVBc1JDO1FBeFFDLFdBQUssR0FBRztZQUNOLFNBQVMsRUFBRSxJQUFJO1lB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
