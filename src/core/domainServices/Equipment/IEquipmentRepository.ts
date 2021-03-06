import { Equipment } from 'core/domain/Equipment/Equipment';
import { FindEquipmentRequest } from 'core/domainServices/Equipment/request/FindEquipmentRequest';
import { FindEquipmentForUserRequest } from 'core/domainServices/Equipment/request/FindEquipmentForUserRequest';
import { AddEquipmentRequest } from 'core/domainServices/Equipment/request/AddEquipmentRequest';

export interface IEquipmentRepository {
  addEquipment(request: AddEquipmentRequest): Promise<Equipment>;
  findEquipment(request: FindEquipmentRequest): Promise<Equipment>;
  findEquipmentForUser(
    request: FindEquipmentForUserRequest
  ): Promise<Equipment[]>;
}
