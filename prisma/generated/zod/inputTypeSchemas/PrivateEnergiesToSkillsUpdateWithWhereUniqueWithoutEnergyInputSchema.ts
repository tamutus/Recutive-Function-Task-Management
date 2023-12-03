import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToSkillsWhereUniqueInputSchema } from './PrivateEnergiesToSkillsWhereUniqueInputSchema';
import { PrivateEnergiesToSkillsUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsUpdateWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsUncheckedUpdateWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsUncheckedUpdateWithoutEnergyInputSchema';

export const PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToSkillsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToSkillsUpdateWithoutEnergyInputSchema),z.lazy(() => PrivateEnergiesToSkillsUncheckedUpdateWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToSkillsUpdateWithWhereUniqueWithoutEnergyInputSchema;
