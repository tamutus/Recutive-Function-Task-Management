import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from './PrivateEnergiesToSkillsWhereUniqueInputSchema';
import { PrivateEnergiesToSkillsCreateWithoutSkillInputSchema } from './PrivateEnergiesToSkillsCreateWithoutSkillInputSchema';
import { PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema';

export const PrivateEnergiesToSkillsCreateOrConnectWithoutSkillInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsCreateOrConnectWithoutSkillInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToSkillsCreateWithoutSkillInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default PrivateEnergiesToSkillsCreateOrConnectWithoutSkillInputSchema;
