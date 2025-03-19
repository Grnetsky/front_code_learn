const Permissions = {
    VIEW: 1 << 0,   // 00000001 (1)
    EDIT: 1 << 1,   // 00000010 (2)
    CREATE: 1 << 2, // 00000100 (4)
    DELETE: 1 << 3, // 00001000 (8)
    ADMIN: 1 << 4   // 00010000 (16)
};

// 普通编辑者权限 = 查看 + 编辑 + 创建
let editor = Permissions.VIEW | Permissions.EDIT | Permissions.CREATE;

// 管理员权限 = 所有权限
const admin = Permissions.VIEW | Permissions.EDIT | Permissions.CREATE
    | Permissions.DELETE | Permissions.ADMIN;

function hasPermission(userPerm, required) {
    return (userPerm & required) === required;
}

// 使用示例
console.log(hasPermission(editor, Permissions.EDIT));  // true
console.log(hasPermission(editor, Permissions.ADMIN)); // false

function addPermission(userPerm, permission) {
    return userPerm | permission;
}

// 给编辑者增加删除权限
editor = addPermission(editor, Permissions.DELETE);
console.log(hasPermission(editor, Permissions.DELETE)); // true

function togglePermission(userPerm, permission) {
    return hasPermission(userPerm, permission)
        ? removePermission(userPerm, permission)
        : addPermission(userPerm, permission);
}

// 切换删除权限
editor = togglePermission(editor, Permissions.DELETE);


function canViewAndEdit(userPerm) {
    const required = Permissions.VIEW | Permissions.EDIT;
    return (userPerm & required) === required;
}


// 允许 VIEW 或 EDIT 任意一个权限即可
function canViewOrEdit(userPerm) {
    return (userPerm & (Permissions.VIEW | Permissions.EDIT)) !== 0;
}


// 禁止 ADMIN 权限的访问校验
function isNonAdmin(userPerm) {
    return (userPerm & Permissions.ADMIN) === 0;
}