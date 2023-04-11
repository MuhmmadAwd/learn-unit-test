const arr =  require("../main.js")

test("test",()=>{
    expect(arr.length).toBe(8)
})

test("test",()=>{
    expect(arr.length).not.toBe(57)
})

test("test",()=>{
    expect(arr).toHaveLength(8)
})

test("test",()=>{
    expect(arr).not.toBeUndefined(8)
})

test("test",()=>{
    expect(arr).toContain(3)
})

test("test",()=>{
    for (let i = 0; i < arr.length; i++) {
        expect(arr[i]).not.toBe(57)
        
    }
    
})

