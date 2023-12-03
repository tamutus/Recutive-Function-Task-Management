import { z } from 'zod';

/////////////////////////////////////////
// PRIVATE ENERGIES TO TASK TEMPLATES SCHEMA
/////////////////////////////////////////

/**
 * People can associate their personally defined forms of energy with task templates.
 */
export const PrivateEnergiesToTaskTemplatesSchema = z.object({
  taskId: z.number().int(),
  energyId: z.number().int(),
})

export type PrivateEnergiesToTaskTemplates = z.infer<typeof PrivateEnergiesToTaskTemplatesSchema>

export default PrivateEnergiesToTaskTemplatesSchema;
