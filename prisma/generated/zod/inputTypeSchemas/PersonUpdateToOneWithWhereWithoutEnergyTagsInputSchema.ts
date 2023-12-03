import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutEnergyTagsInputSchema } from './PersonUpdateWithoutEnergyTagsInputSchema';
import { PersonUncheckedUpdateWithoutEnergyTagsInputSchema } from './PersonUncheckedUpdateWithoutEnergyTagsInputSchema';

export const PersonUpdateToOneWithWhereWithoutEnergyTagsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutEnergyTagsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutEnergyTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutEnergyTagsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutEnergyTagsInputSchema;
