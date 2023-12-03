import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { EnergyUpdateWithoutSkillsInputSchema } from './EnergyUpdateWithoutSkillsInputSchema';
import { EnergyUncheckedUpdateWithoutSkillsInputSchema } from './EnergyUncheckedUpdateWithoutSkillsInputSchema';

export const EnergyUpdateToOneWithWhereWithoutSkillsInputSchema: z.ZodType<Prisma.EnergyUpdateToOneWithWhereWithoutSkillsInput> = z.object({
  where: z.lazy(() => EnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EnergyUpdateWithoutSkillsInputSchema),z.lazy(() => EnergyUncheckedUpdateWithoutSkillsInputSchema) ]),
}).strict();

export default EnergyUpdateToOneWithWhereWithoutSkillsInputSchema;
