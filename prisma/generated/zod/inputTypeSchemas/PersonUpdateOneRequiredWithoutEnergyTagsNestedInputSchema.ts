import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutEnergyTagsInputSchema } from './PersonCreateWithoutEnergyTagsInputSchema';
import { PersonUncheckedCreateWithoutEnergyTagsInputSchema } from './PersonUncheckedCreateWithoutEnergyTagsInputSchema';
import { PersonCreateOrConnectWithoutEnergyTagsInputSchema } from './PersonCreateOrConnectWithoutEnergyTagsInputSchema';
import { PersonUpsertWithoutEnergyTagsInputSchema } from './PersonUpsertWithoutEnergyTagsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutEnergyTagsInputSchema } from './PersonUpdateToOneWithWhereWithoutEnergyTagsInputSchema';
import { PersonUpdateWithoutEnergyTagsInputSchema } from './PersonUpdateWithoutEnergyTagsInputSchema';
import { PersonUncheckedUpdateWithoutEnergyTagsInputSchema } from './PersonUncheckedUpdateWithoutEnergyTagsInputSchema';

export const PersonUpdateOneRequiredWithoutEnergyTagsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutEnergyTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutEnergyTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEnergyTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutEnergyTagsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutEnergyTagsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutEnergyTagsInputSchema),z.lazy(() => PersonUpdateWithoutEnergyTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutEnergyTagsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutEnergyTagsNestedInputSchema;
