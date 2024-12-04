interface Observer {
    subscribe: (name: string, action: Action) => void,
    unsubscribe: (name:string, action:Action) => void,
    emit: (name:string, data?: unknown) => void,
}

type Action = (data?: unknown) => void

const Observer = function():Observer{

    const events:Record<string, Action[]> = {}

    const subscribe = (name: string, action: Action):void => {
        if (name in events){
            events[name].push(action)
        }else{
            events[name] = [action]
        }
    }

    const unsubscribe = (name:string, action:Action):void => {
        if (name in events){
            events[name] = events[name].filter(subscriber => subscriber !== action)
        }
    }

    const emit = (name:string, data?: unknown): void => {
        if (name in events){
            events[name].forEach(action => action(data))
        }
    }

    return {
        subscribe,
        unsubscribe,
        emit
    }
}

const observer = Observer()
export default observer