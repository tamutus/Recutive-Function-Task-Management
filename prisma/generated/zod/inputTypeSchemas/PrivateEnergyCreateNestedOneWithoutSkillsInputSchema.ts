import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutSkillsInputSchema } from './PrivateEnergyCreateWithoutSkillsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutSkillsInputSchema } from './PrivateEnergyUncheckedCreateWithoutSkillsInputSchema';
import { PrivateEnergyCreateOrConnectWithoutSkillsInputSchema } from './PrivateEnergyCreateOrConnectWithoutSkillsInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';

export const PrivateEnergyCreateNestedOneWithoutSkillsInputSchema: z.ZodType<Prisma.PrivateEnergyCreateNestedOneWithoutSkillsInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutSkillsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional()
}).strict();

export default PrivateEnergyCreateNestedOneWithoutSkillsInputSchema;
