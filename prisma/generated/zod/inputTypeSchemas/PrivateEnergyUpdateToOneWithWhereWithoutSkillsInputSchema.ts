import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';
import { PrivateEnergyUpdateWithoutSkillsInputSchema } from './PrivateEnergyUpdateWithoutSkillsInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutSkillsInputSchema } from './PrivateEnergyUncheckedUpdateWithoutSkillsInputSchema';

export const PrivateEnergyUpdateToOneWithWhereWithoutSkillsInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateToOneWithWhereWithoutSkillsInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PrivateEnergyUpdateWithoutSkillsInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutSkillsInputSchema) ]),
}).strict();

export default PrivateEnergyUpdateToOneWithWhereWithoutSkillsInputSchema;
