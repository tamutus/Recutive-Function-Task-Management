import { z } from 'zod';

/////////////////////////////////////////
// ENERGIES TO TASK TEMPLATES SCHEMA
/////////////////////////////////////////

/**
 * The community can denote that certain task templates are relevant to certain forms of energy
 */
export const EnergiesToTaskTemplatesSchema = z.object({
  taskId: z.number().int(),
  energyId: z.number().int(),
  info: z.string().nullable(),
  links: z.string().array(),
})

export type EnergiesToTaskTemplates = z.infer<typeof EnergiesToTaskTemplatesSchema>

export default EnergiesToTaskTemplatesSchema;
