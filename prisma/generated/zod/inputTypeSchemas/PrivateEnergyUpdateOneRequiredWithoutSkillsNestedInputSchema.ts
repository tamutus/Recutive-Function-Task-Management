import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateWithoutSkillsInputSchema } from './PrivateEnergyCreateWithoutSkillsInputSchema';
import { PrivateEnergyUncheckedCreateWithoutSkillsInputSchema } from './PrivateEnergyUncheckedCreateWithoutSkillsInputSchema';
import { PrivateEnergyCreateOrConnectWithoutSkillsInputSchema } from './PrivateEnergyCreateOrConnectWithoutSkillsInputSchema';
import { PrivateEnergyUpsertWithoutSkillsInputSchema } from './PrivateEnergyUpsertWithoutSkillsInputSchema';
import { PrivateEnergyWhereUniqueInputSchema } from './PrivateEnergyWhereUniqueInputSchema';
import { PrivateEnergyUpdateToOneWithWhereWithoutSkillsInputSchema } from './PrivateEnergyUpdateToOneWithWhereWithoutSkillsInputSchema';
import { PrivateEnergyUpdateWithoutSkillsInputSchema } from './PrivateEnergyUpdateWithoutSkillsInputSchema';
import { PrivateEnergyUncheckedUpdateWithoutSkillsInputSchema } from './PrivateEnergyUncheckedUpdateWithoutSkillsInputSchema';

export const PrivateEnergyUpdateOneRequiredWithoutSkillsNestedInputSchema: z.ZodType<Prisma.PrivateEnergyUpdateOneRequiredWithoutSkillsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergyCreateWithoutSkillsInputSchema),z.lazy(() => PrivateEnergyUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateEnergyCreateOrConnectWithoutSkillsInputSchema).optional(),
  upsert: z.lazy(() => PrivateEnergyUpsertWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => PrivateEnergyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateEnergyUpdateToOneWithWhereWithoutSkillsInputSchema),z.lazy(() => PrivateEnergyUpdateWithoutSkillsInputSchema),z.lazy(() => PrivateEnergyUncheckedUpdateWithoutSkillsInputSchema) ]).optional(),
}).strict();

export default PrivateEnergyUpdateOneRequiredWithoutSkillsNestedInputSchema;
