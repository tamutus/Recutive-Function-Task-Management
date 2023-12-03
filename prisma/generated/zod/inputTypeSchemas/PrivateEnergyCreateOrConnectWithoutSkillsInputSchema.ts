import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyCreateWithoutSkillsInputSchema } from './PrivateEnergyCreateWithoutSkillsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutSkillsInputSchema } from './PrivateEnergyUncheckedCreateWithoutSkillsInputSchema';

export const PrivateEnergyCreateOrConnectWithoutSkillsInputSchema: z.ZodType<Prisma.PrivateEnergyCreateOrConnectWithoutSkillsInput> = z.object({
  where: z.lazy(() => PrivateEnergyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutSkillsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutSkillsInputSchema) ]),
}).strict();

export default PrivateEnergyCreateOrConnectWithoutSkillsInputSchema;
