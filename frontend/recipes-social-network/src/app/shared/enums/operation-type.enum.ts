/**
 * Enum that represents the operation types that are allowed
 * from a menu
 */
export enum OperationType {
  None = 0,              // 000000
  Open = 1,              // 000001
  Edit = 2,              // 000010
  ChangePassword = 4,    // 000100
  Delete = 8,            // 001000
  Download = 16,         // 010000
  All = 63               // 111111
}
