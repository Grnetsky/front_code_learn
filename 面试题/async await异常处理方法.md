# try catch
```typescript
try{
 const file = await window.showOpenFilePicker()
    if(file){
      const dataObj = await file[0].getFile()
      const data = await dataObj.text()
      console.log(data)
      if(data){
        const json = JSON.parse(data);
        window.meta2d.open(json);
      }
    }
}catch(err){
  console.log("打开失败")
}
   

```
# catch
```typescript
    const file = await window.showOpenFilePicker().catch(()=>{
      console.log("打开文件失败")
      return
    })
    if(file){
      const dataObj = await file[0].getFile()
      const data = await dataObj.text()
      console.log(data)
      if(data){
        const json = JSON.parse(data);
        window.meta2d.open(json);
      }
    }
```
