import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateNestedOneWithoutPrivateEnergiesInputSchema } from './SkillCreateNestedOneWithoutPrivateEnergiesInputSchema';

export const PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsCreateWithoutEnergyInput> = z.object({
  notes: z.string().optional().nullable(),
  skill: z.lazy(() => SkillCreateNestedOneWithoutPrivateEnergiesInputSchema)
}).strict();

export default PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema;
