import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateNestedOneWithoutEnergiesInputSchema } from './SkillCreateNestedOneWithoutEnergiesInputSchema';
import { EnergyCreateNestedOneWithoutSkillsInputSchema } from './EnergyCreateNestedOneWithoutSkillsInputSchema';

export const EnergiesToSkillsCreateInputSchema: z.ZodType<Prisma.EnergiesToSkillsCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  skill: z.lazy(() => SkillCreateNestedOneWithoutEnergiesInputSchema),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutSkillsInputSchema)
}).strict();

export default EnergiesToSkillsCreateInputSchema;
