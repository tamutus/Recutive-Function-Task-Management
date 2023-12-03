import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToSkillsScalarWhereInputSchema } from './EnergiesToSkillsScalarWhereInputSchema';
import { EnergiesToSkillsUpdateManyMutationInputSchema } from './EnergiesToSkillsUpdateManyMutationInputSchema';
import { EnergiesToSkillsUncheckedUpdateManyWithoutEnergyInputSchema } from './EnergiesToSkillsUncheckedUpdateManyWithoutEnergyInputSchema';

export const EnergiesToSkillsUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToSkillsUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToSkillsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToSkillsUpdateManyMutationInputSchema),z.lazy(() => EnergiesToSkillsUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToSkillsUpdateManyWithWhereWithoutEnergyInputSchema;
