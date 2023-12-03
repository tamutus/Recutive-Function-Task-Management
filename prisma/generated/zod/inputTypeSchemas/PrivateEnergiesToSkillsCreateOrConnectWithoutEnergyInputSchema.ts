import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from './PrivateEnergiesToSkillsWhereUniqueInputSchema';
import { PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema';

export const PrivateEnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsCreateOrConnectWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToSkillsCreateOrConnectWithoutEnergyInputSchema;
