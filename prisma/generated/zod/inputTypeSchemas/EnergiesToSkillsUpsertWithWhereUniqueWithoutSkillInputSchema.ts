import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsWhereUniqueInputSchema } from './EnergiesToSkillsWhereUniqueInputSchema';
import { EnergiesToSkillsUpdateWithoutSkillInputSchema } from './EnergiesToSkillsUpdateWithoutSkillInputSchema';
import { EnergiesToSkillsUncheckedUpdateWithoutSkillInputSchema } from './EnergiesToSkillsUncheckedUpdateWithoutSkillInputSchema';
import { EnergiesToSkillsCreateWithoutSkillInputSchema } from './EnergiesToSkillsCreateWithoutSkillInputSchema';
import { EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema } from './EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema';

export const EnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.EnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EnergiesToSkillsUpdateWithoutSkillInputSchema),z.lazy(() => EnergiesToSkillsUncheckedUpdateWithoutSkillInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToSkillsCreateWithoutSkillInputSchema),z.lazy(() => EnergiesToSkillsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default EnergiesToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema;
