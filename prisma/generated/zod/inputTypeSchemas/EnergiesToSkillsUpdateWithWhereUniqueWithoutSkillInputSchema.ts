import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsWhereUniqueInputSchema } from './EnergiesToSkillsWhereUniqueInputSchema';
import { EnergiesToSkillsUpdateWithoutSkillInputSchema } from './EnergiesToSkillsUpdateWithoutSkillInputSchema';
import { EnergiesToSkillsUncheckedUpdateWithoutSkillInputSchema } from './EnergiesToSkillsUncheckedUpdateWithoutSkillInputSchema';

export const EnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.EnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => EnergiesToSkillsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EnergiesToSkillsUpdateWithoutSkillInputSchema),z.lazy(() => EnergiesToSkillsUncheckedUpdateWithoutSkillInputSchema) ]),
}).strict();

export default EnergiesToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema;
