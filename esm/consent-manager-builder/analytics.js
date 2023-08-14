function getConsentMiddleware(
  destinationPreferences,
  categoryPreferences,
  defaultDestinationBehavior
) {
  return function(_a) {
    var payload = _a.payload,
      next = _a.next
    payload.obj.context.consent = {
      defaultDestinationBehavior: defaultDestinationBehavior,
      categoryPreferences: categoryPreferences,
      destinationPreferences: destinationPreferences
    }
    next(payload)
  }
}
export default function conditionallyLoadAnalytics(_a) {
  var writeKey = _a.writeKey,
    destinations = _a.destinations,
    destinationPreferences = _a.destinationPreferences,
    isConsentRequired = _a.isConsentRequired,
    _b = _a.shouldReload,
    shouldReload = _b === void 0 ? true : _b,
    _c = _a.devMode,
    devMode = _c === void 0 ? false : _c,
    defaultDestinationBehavior = _a.defaultDestinationBehavior,
    categoryPreferences = _a.categoryPreferences
  var wd = window
  var integrations = { All: false, 'Segment.io': true }
  var isAnythingEnabled = false
  var isEverythingEnabled = true
  if (!destinationPreferences) {
    if (isConsentRequired) {
      return
    }
    // Load a.js normally when consent isn't required and there's no preferences
    if (!wd.analytics.initialized) {
      wd.analytics.load(writeKey)
    }
    return
  }
  for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
    var destination = destinations_1[_i]
    // Was a preference explicitly set on this destination?
    var explicitPreference = destination.id in destinationPreferences
    if (!explicitPreference && defaultDestinationBehavior === 'enable') {
      integrations[destination.id] = true
      continue
    }
    var isEnabled = Boolean(destinationPreferences[destination.id])
    if (isEnabled) {
      isAnythingEnabled = true
    } else {
      isEverythingEnabled = false
    }
    integrations[destination.id] = isEnabled
  }
  // Reload the page if the trackers have already been initialised so that
  // the user's new preferences can take affect
  if (wd.analytics && wd.analytics.initialized) {
    if (shouldReload) {
      window.location.reload()
    }
    return
  }
  if (devMode) {
    return
  }
  // Enable all destinations if everything is enabled
  if (isEverythingEnabled) {
    integrations.All = true
  }
  // Don't load a.js at all if nothing has been enabled
  if (isAnythingEnabled) {
    var middleware = getConsentMiddleware(
      destinationPreferences,
      categoryPreferences,
      defaultDestinationBehavior
    )
    // @ts-ignore: Analytics.JS type should be updated with addSourceMiddleware
    wd.analytics.addSourceMiddleware(middleware)
    wd.analytics.load(writeKey, { integrations: integrations })
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci1idWlsZGVyL2FuYWx5dGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkEsU0FBUyxvQkFBb0IsQ0FDM0Isc0JBQXNCLEVBQ3RCLG1CQUFtQixFQUNuQiwwQkFBMEI7SUFFMUIsT0FBTyxVQUFDLEVBQWlCO1lBQWYsT0FBTyxhQUFBLEVBQUUsSUFBSSxVQUFBO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRztZQUM1QiwwQkFBMEIsNEJBQUE7WUFDMUIsbUJBQW1CLHFCQUFBO1lBQ25CLHNCQUFzQix3QkFBQTtTQUN2QixDQUFBO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2YsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sQ0FBQyxPQUFPLFVBQVUsMEJBQTBCLENBQUMsRUFTakM7UUFSaEIsUUFBUSxjQUFBLEVBQ1IsWUFBWSxrQkFBQSxFQUNaLHNCQUFzQiw0QkFBQSxFQUN0QixpQkFBaUIsdUJBQUEsRUFDakIsb0JBQW1CLEVBQW5CLFlBQVksbUJBQUcsSUFBSSxLQUFBLEVBQ25CLGVBQWUsRUFBZixPQUFPLG1CQUFHLEtBQUssS0FBQSxFQUNmLDBCQUEwQixnQ0FBQSxFQUMxQixtQkFBbUIseUJBQUE7SUFFbkIsSUFBTSxFQUFFLEdBQUcsTUFBdUIsQ0FBQTtJQUNsQyxJQUFNLFlBQVksR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFBO0lBQ3ZELElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFBO0lBQzdCLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDO0lBRS9CLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtRQUMzQixJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLE9BQU07U0FDUDtRQUVELDRFQUE0RTtRQUM1RSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDN0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDNUI7UUFDRCxPQUFNO0tBQ1A7SUFFRCxLQUEwQixVQUFZLEVBQVosNkJBQVksRUFBWiwwQkFBWSxFQUFaLElBQVksRUFBRTtRQUFuQyxJQUFNLFdBQVcscUJBQUE7UUFDcEIsdURBQXVEO1FBQ3ZELElBQU0sa0JBQWtCLEdBQUcsV0FBVyxDQUFDLEVBQUUsSUFBSSxzQkFBc0IsQ0FBQTtRQUNuRSxJQUFJLENBQUMsa0JBQWtCLElBQUksMEJBQTBCLEtBQUssUUFBUSxFQUFFO1lBQ2xFLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFBO1lBQ25DLFNBQVE7U0FDVDtRQUVELElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqRSxJQUFJLFNBQVMsRUFBRTtZQUNiLGlCQUFpQixHQUFHLElBQUksQ0FBQTtTQUN6QjthQUFNO1lBQ0wsbUJBQW1CLEdBQUcsS0FBSyxDQUFBO1NBQzVCO1FBQ0QsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUE7S0FDekM7SUFFRCx3RUFBd0U7SUFDeEUsNkNBQTZDO0lBQzdDLElBQUksRUFBRSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtRQUM1QyxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFBO1NBQ3pCO1FBQ0QsT0FBTTtLQUNQO0lBRUQsSUFBSSxPQUFPLEVBQUU7UUFDWCxPQUFNO0tBQ1A7SUFFRCxtREFBbUQ7SUFDbkQsSUFBSSxtQkFBbUIsRUFBRTtRQUN2QixZQUFZLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQTtLQUN4QjtJQUNELHFEQUFxRDtJQUNyRCxJQUFJLGlCQUFpQixFQUFFO1FBQ3JCLElBQU0sVUFBVSxHQUFHLG9CQUFvQixDQUNyQyxzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ25CLDBCQUEwQixDQUMzQixDQUFBO1FBQ0QsMkVBQTJFO1FBQzNFLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFNUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsWUFBWSxjQUFBLEVBQUUsQ0FBQyxDQUFBO0tBQzlDO0FBQ0gsQ0FBQyJ9
