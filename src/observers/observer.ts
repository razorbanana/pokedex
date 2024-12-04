import type {EventNames} from "../config/config"

interface Observer {
    subscribe: (name: EventNames, action: Action) => void,
    unsubscribe: (name: EventNames, action: Action) => void,
    emit: (name: EventNames, data?: unknown) => void,
}

type Action = (data?: unknown) => void

const Observer = function():Observer{
    
    const events:Partial<Record<EventNames, Action[]>> = {}

    const subscribe = (name:EventNames, action: Action):void => {
        if (events[name]){
            events[name].push(action)
        }else{
            events[name] = [action]
        }
    }

    const unsubscribe = (name:EventNames, action:Action):void => {
        if (events[name]){
            events[name] = events[name].filter(subscriber => subscriber !== action)
        }
    }

    const emit = (name:EventNames, data?: unknown): void => {
        events[name]?.forEach(action => action(data))
    }

    return {
        subscribe,
        unsubscribe,
        emit
    }
}

const observer = Observer()
export default observer