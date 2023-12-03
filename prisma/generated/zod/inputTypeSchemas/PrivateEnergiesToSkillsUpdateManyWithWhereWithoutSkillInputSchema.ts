import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsScalarWhereInputSchema } from './PrivateEnergiesToSkillsScalarWhereInputSchema';
import { PrivateEnergiesToSkillsUpdateManyMutationInputSchema } from './PrivateEnergiesToSkillsUpdateManyMutationInputSchema';
import { PrivateEnergiesToSkillsUncheckedUpdateManyWithoutSkillInputSchema } from './PrivateEnergiesToSkillsUncheckedUpdateManyWithoutSkillInputSchema';

export const PrivateEnergiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUpdateManyWithWhereWithoutSkillInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToSkillsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToSkillsUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedUpdateManyWithoutSkillInputSchema) ]),
}).strict();

export default PrivateEnergiesToSkillsUpdateManyWithWhereWithoutSkillInputSchema;
