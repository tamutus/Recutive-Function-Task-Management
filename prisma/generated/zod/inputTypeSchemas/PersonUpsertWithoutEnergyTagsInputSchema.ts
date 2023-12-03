import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutEnergyTagsInputSchema } from './PersonUpdateWithoutEnergyTagsInputSchema';
import { PersonUncheckedUpdateWithoutEnergyTagsInputSchema } from './PersonUncheckedUpdateWithoutEnergyTagsInputSchema';
import { PersonCreateWithoutEnergyTagsInputSchema } from './PersonCreateWithoutEnergyTagsInputSchema';
import { PersonUncheckedCreateWithoutEnergyTagsInputSchema } from './PersonUncheckedCreateWithoutEnergyTagsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutEnergyTagsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutEnergyTagsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutEnergyTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutEnergyTagsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutEnergyTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEnergyTagsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutEnergyTagsInputSchema;
