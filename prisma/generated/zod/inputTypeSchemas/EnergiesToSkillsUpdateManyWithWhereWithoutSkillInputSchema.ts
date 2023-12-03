import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsScalarWhereInputSchema } from './EnergiesToSkillsScalarWhereInputSchema';
import { EnergiesToSkillsUpdateManyMutationInputSchema } from './EnergiesToSkillsUpdateManyMutationInputSchema';
import { EnergiesToSkillsUncheckedUpdateManyWithoutSkillInputSchema } from './EnergiesToSkillsUncheckedUpdateManyWithoutSkillInputSchema';

export const EnergiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema: z.ZodType<Prisma.EnergiesToSkillsUpdateManyWithWhereWithoutSkillInput> = z.object({
  where: z.lazy(() => EnergiesToSkillsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToSkillsUpdateManyMutationInputSchema),z.lazy(() => EnergiesToSkillsUncheckedUpdateManyWithoutSkillInputSchema) ]),
}).strict();

export default EnergiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema;
