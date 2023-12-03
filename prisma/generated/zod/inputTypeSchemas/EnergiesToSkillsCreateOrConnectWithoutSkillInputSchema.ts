import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsWhereUniqueInputSchema } from './EnergiesToSkillsWhereUniqueInputSchema';
import { EnergiesToSkillsCreateWithoutSkillInputSchema } from './EnergiesToSkillsCreateWithoutSkillInputSchema';
import { EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema } from './EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema';

export const EnergiesToSkillsCreateOrConnectWithoutSkillInputSchema: z.ZodType<Prisma.EnergiesToSkillsCreateOrConnectWithoutSkillInput> = z.object({
  where: z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToSkillsCreateWithoutSkillInputSchema),z.lazy(() => EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default EnergiesToSkillsCreateOrConnectWithoutSkillInputSchema;
