import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsScalarWhereInputSchema } from './PrivateEnergiesToSkillsScalarWhereInputSchema';
import { PrivateEnergiesToSkillsUpdateManyMutationInputSchema } from './PrivateEnergiesToSkillsUpdateManyMutationInputSchema';
import { PrivateEnergiesToSkillsUncheckedUpdateManyWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsUncheckedUpdateManyWithoutEnergyInputSchema';

export const PrivateEnergiesToSkillsUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToSkillsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToSkillsUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToSkillsUpdateManyWithWhereWithoutEnergyInputSchema;
