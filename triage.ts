
enum Code {
    White = 0,
    Green = 1,
    Yellow = 5,
    Red = 10 
}

enum Age {
    Baby = 5,
    Child = 2,
    Adult = 0,
    Elder = 1
}

type Urgency = [Code, Age]

function triage(patients : Urgency[]): Urgency[] {
    return patients.sort((a, b) => {
        let priority1: number = (b[0]+b[1])
        let priority2: number = (a[0]+a[1])
        if (priority1 == priority2) {
            return a[1] - b[1]
        } else {
            return priority1 - priority1; 
        }
    //return patients.sort((a, b) => ((b[0]+b[1]) - (a[0]+a[1])))
    })
}
